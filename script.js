var nomes=new Array();

nomes[0]="Felipe";
nomes[1]="Dimitri";
nomes[2]="Bolsonaro";
nomes[3]="Lula";
nomes[4]="Joyce";
nomes[5]="Iury";
nomes[6]="Messi";
nomes[7]="Jorge";
nomes[8]="Ronaldo";
nomes[9]="Jhin";


for(var i = 0; i < nomes.length; i++) {
    if(nomes[i].charAt(0)==='J'|| nomes[i].charAt(0)==='j'){
        console.log("Goodbye "+ nomes[i])
    }

    else{
        console.log("Hello "+ nomes[i])
    }
}