uniform sampler2D text;

const vec4	mult	=	vec4(1.0, 1.0, 1.0, 1.0),
			opac	=	vec4(1.0, 1.0, 1.0, 1.0);
const vec2	repeat	=	vec2(1.0, 1.0),
			offset	=	vec2(0.0, 0.0);

void main(void){
	vec4 _texture, _color;
	vec2 _coord2d;
	_coord2d = gl_TexCoord[0].st*repeat + offset;
	_texture = texture2D(text, _coord2d);
	_color = _texture*mult;
	gl_FragColor = _color*opac;
}