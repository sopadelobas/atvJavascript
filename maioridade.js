let idadePessoa = 17;
let maioridade = 18;
document.writeln("Verificação de idade");
document.writeln("<br>");

if (idadePessoa < maioridade ) {
    document.writeln("Idade digitada: " + idadePessoa);
    document.writeln("<br>");
    document.writeln("Você não atingiu a maioridade!");
}
else {
    document.writeln("Idade digitada: " + idadePessoa);
    document.writeln("<br>");
    document.writeln("Você já está na maioridade!");
}