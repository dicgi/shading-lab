const vec4 color   = vec4(1.00, 0.00, 0.25, 1.00),
           opacity = vec4(1.00, 1.00, 1.00, 1.00);

void main(void) {
    gl_FragColor = color*opacity;
}
