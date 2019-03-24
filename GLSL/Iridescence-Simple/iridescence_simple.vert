/*...................................................................................................
Author: Diego Inácio
GitHub: github.com/diegoinacio
  Date: AUG/07/2017
.....................................................................................................
Vertex part of a simple iridescent shader using OpenGL Shading Language.

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
varying vec4 P;
varying float fr;

void main(void){
	P = gl_Vertex;
	vec3 N = gl_NormalMatrix*gl_Normal;
	vec3 V = vec3(gl_ModelViewMatrix*gl_Vertex);
	vec3 E = normalize(-V);
	fr = dot(N, E);
	gl_Position = gl_ModelViewProjectionMatrix*gl_Vertex;
}