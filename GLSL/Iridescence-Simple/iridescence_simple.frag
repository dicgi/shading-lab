/*...................................................................................................
Author: Diego Inácio
GitHub: github.com/diegoinacio
  Date: AUG/07/2017
.....................................................................................................
Fragment part of a simple iridescent shader using OpenGL Shading Language.

If you have any comment, sent it to me at: diegodci@gmail.com
Thank you! :D
.....................................................................................................
References:

ROST et al. OpenGL Shading Language, 3rd edition.

BAILEY; CUNNINGHAM. Graphics Shaders: Theory and Practice, 2nd Edition.

EBERT et al. Texturing and Modeling: A Procedural Approach, 3rd edition.
.....................................................................................................
Resources:

<OpenGL>
http://www.opengl.org/
...................................................................................................*/
#define PI		3.1415926535897931

varying vec4	P;
varying float	fr;

const 	vec3	ofreq	=	vec3(1.0, 1.0, 1.0),		// Frequency of iridescent orientantion part.
				nfreq	=	vec3(1.0, 1.0, 1.0),		// Frequency of iridescent noise part.
				ooset	=	vec3(0.0, 0.0, 0.0),		// Offset of iridescent orientantion part.
				noset	=	vec3(0.0, 0.0, 0.0);		// Offset of iridescent noise part.
const 	float	nmult	=	1.0,						// Controls the intensity of noise.
				gamma	=	0.75,						// Gamma correction applied to incidence value (fr).
				minvl	=	0.0;						// Incident distribution curve control, applied after gamma correction.

float setRange(float value, float oMin, float oMax, float iMin, float iMax){
	return iMin + ((value - oMin)/(oMax - oMin))*(iMax - iMin);
}

float diNoise(vec3 freq, vec3 offset){
	// noise function to create irregularity
	return	sin(2.0*PI*P.x*freq.x*2.0 + 12.0 + offset.x) + cos(2.0*PI*P.z*freq.x + 21.0 + offset.x)*
			sin(2.0*PI*P.y*freq.y*2.0 + 23.0 + offset.y) + cos(2.0*PI*P.y*freq.y + 32.0 + offset.y)*
			sin(2.0*PI*P.z*freq.z*2.0 + 34.0 + offset.z) + cos(2.0*PI*P.x*freq.z + 43.0 + offset.z);
}

vec3 iridescence(	float orient, float noiseMult,
					vec3 freqA, vec3 offsetA, vec3 freqB, vec3 offsetB){
	// this function returns a iridescence value based on orientation
	vec3 irid;
	irid.x = abs(cos(2.0*PI*orient*freqA.x + diNoise(freqB, offsetB)*noiseMult + 1.0 + offsetA.x));
	irid.y = abs(cos(2.0*PI*orient*freqA.y + diNoise(freqB, offsetB)*noiseMult + 2.0 + offsetA.y));
	irid.z = abs(cos(2.0*PI*orient*freqA.z + diNoise(freqB, offsetB)*noiseMult + 3.0 + offsetA.z));
	return irid;
}

void main(void){
	vec3 _iridColor;
	float _space, _incidence;
	_space = pow(1.0 - fr, 1.0/gamma);
	_incidence = setRange(_space, 0.0, 1.0, minvl, 1.0);
	_iridColor = iridescence(fr, nmult, ofreq, ooset, nfreq, noset);
	gl_FragColor = vec4(_iridColor, 1.0)*_incidence;
}