const vec4	color	= vec4(1.0, 0.0, 0.25, 1.0),
			opacity	= vec4(1.0, 1.0, 1.0, 1.0);

void main(void){
	gl_FragColor = color*opacity;
}