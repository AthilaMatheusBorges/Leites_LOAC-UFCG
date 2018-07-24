/* Comentário igual a C
       isso // nao funciona como comentario !
*/

.section .text
.globl main
main:
	addi	s0, zero, 20
	addi	s1, zero, 1
jump:
	beq	s0, s1, done
	srl	s0, s0, s1
	j jump
done:
	ret
	/*li	a1,17
	addi	a2,a1,34
	mv	a0,a2
        add	a3,a1,a2      
pula:
	lw	t1,8(zero)
        sw      a3,12(zero)
	lw	t1,8(zero)
	lw	t2,12(zero)
        beq     a2,a3,pula
        sw      a4,16(s0)
*/


