`default_nettype none
`include "processador.sv"

module cpu #(parameter NBITS = 8, NREGS=32) (
  input logic clock, reset,

  output logic [NBITS-1:0] saida,
  input logic [NBITS-1:0] entrada,

  zoi z);

// interface com o processador
logic [NBITS-1:2] memAddress;
logic [NBITS-1:0] memWriteData; // dados que o processador quer escrever
logic [NBITS-1:0] memReadData;  // dados que o processador esta lendo
logic             memMemWrite;  // comando vindo do processador para escrever
logic interrupt; // requisicao de interrupcao indo para o processador

logic [NBITS-1:0] ReadData; // saida da memoria
logic [NBITS-1:0] guarda_ent; // guardar entrada do pulso de clock anterior

logic io; // saida do decodificador de enderecos, indica que endereco e de I/O
always_comb io = (memAddress == 'h3F);

always_comb begin
  memReadData <= ReadData;
end

memo m(.address(memAddress), .clock(clock), .data(memWriteData), .wren(memMemWrite), .q(ReadData));

processador #(.NBITS(NBITS), .NREGS(NREGS)) p(.*);

endmodule

