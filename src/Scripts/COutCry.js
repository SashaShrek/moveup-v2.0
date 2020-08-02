function COutCry(data){
    let arrEU = new Array(26);
    let arrED = new Array(26);
    let arrRU = new Array(33);
    let arrRD = new Array(33);
  
    arrEU[0] = 'Q';
    arrEU[1] = 'W';
    arrEU[2] = 'E';
    arrEU[3] = 'R';
    arrEU[4] = 'T';
    arrEU[5] = 'Y';
    arrEU[6] = 'U';
    arrEU[7] = 'I';
    arrEU[8] = 'O';
    arrEU[9] = 'P';
    arrEU[10] = 'A';
    arrEU[11] = 'S';
    arrEU[12] = 'D';
    arrEU[13] = 'F';
    arrEU[14] = 'G';
    arrEU[15] = 'H';
    arrEU[16] = 'J';
    arrEU[17] = 'K';
    arrEU[18] = 'L';
    arrEU[19] = 'Z';
    arrEU[20] = 'X';
    arrEU[21] = 'C';
    arrEU[22] = 'V';
    arrEU[23] = 'B';
    arrEU[24] = 'N';
    arrEU[25] = 'M';
  
    arrED[0] = 'q';
    arrED[1] = 'w';
    arrED[2] = 'e'
    arrED[3] = 'r';
    arrED[4] = 't';
    arrED[5] = 'y';
    arrED[6] = 'u';
    arrED[7] = 'i';
    arrED[8] = 'o';
    arrED[9] = 'p';
    arrED[10] = 'a';
    arrED[11] = 's';
    arrED[12] = 'd';
    arrED[13] = 'f';
    arrED[14] = 'g';
    arrED[15] = 'h';
    arrED[16] = 'j';
    arrED[17] = 'k';
    arrED[18] = 'l';
    arrED[19] = 'z';
    arrED[20] = 'x';
    arrED[21] = 'c';
    arrED[22] = 'v';
    arrED[23] = 'b';
    arrED[24] = 'n';
    arrED[25] = 'm';
  
    arrRU[0] = 'Й';
    arrRU[1] = 'Ц';
    arrRU[2] = 'У';
    arrRU[3] = 'К';
    arrRU[4] = 'Е';
    arrRU[5] = 'Н';
    arrRU[6] = 'Г';
    arrRU[7] = 'Ш';
    arrRU[8] = 'Щ';
    arrRU[9] = 'З';
    arrRU[10] = 'Х';
    arrRU[11] = 'Ъ';
    arrRU[12] = 'Ф';
    arrRU[13] = 'Ы';
    arrRU[14] = 'В';
    arrRU[15] = 'А';
    arrRU[16] = 'П';
    arrRU[17] = 'Р';
    arrRU[18] = 'О';
    arrRU[19] = 'Л';
    arrRU[20] = 'Д';
    arrRU[21] = 'Ж';
    arrRU[22] = 'Э';
    arrRU[23] = 'Я';
    arrRU[24] = 'Ч';
    arrRU[25] = 'С';
    arrRU[26] = 'М';
    arrRU[27] = 'И';
    arrRU[28] = 'Т';
    arrRU[29] = 'Ь';
    arrRU[30] = 'Б';
    arrRU[31] = 'Ю';
    arrRU[32] = 'Ё';
  
    arrRD[0] = 'й';
    arrRD[1] = 'ц';
    arrRD[2] = 'у';
    arrRD[3] = 'к';
    arrRD[4] = 'е';
    arrRD[5] = 'н';
    arrRD[6] = 'г';
    arrRD[7] = 'ш';
    arrRD[8] = 'щ';
    arrRD[9] = 'з';
    arrRD[10] = 'х';
    arrRD[11] = 'ъ';
    arrRD[12] = 'ф';
    arrRD[13] = 'ы';
    arrRD[14] = 'в';
    arrRD[15] = 'а';
    arrRD[16] = 'п';
    arrRD[17] = 'р';
    arrRD[18] = 'о';
    arrRD[19] = 'л';
    arrRD[20] = 'д';
    arrRD[21] = 'ж';
    arrRD[22] = 'э';
    arrRD[23] = 'я';
    arrRD[24] = 'ч';
    arrRD[25] = 'с';
    arrRD[26] = 'м';
    arrRD[27] = 'и';
    arrRD[28] = 'т';
    arrRD[29] = 'ь';
    arrRD[30] = 'б';
    arrRD[31] = 'ю';
    arrRD[32] = 'ё';
  
    let z = 0;
    let tx = "";
    let as = new Array(data.length);
    for(let i = 0;i<data.length;i++){
      as[i] = data[i];
    }
    let til = 0;
    let apos = "n";
    let vert = "n";
    let cch = 0;
    as.map(x =>{
      if(cch == 1){
        z++;
        cch = 0;
        return;
      }
      til = x == '~' ? til +=1 : til;
      if(Number(x) % 1 == 0){
        apos = as[z+1] == '`' ? 'y' : 'n';
        vert = apos == 'y' ? (as[z+2] == '|' ? 'y' : 'n') : (as[z+1] == '|' ? 'y' : 'n');
        if(apos == 'n' && vert == 'n'){
          let r = til.toString() + x;
          tx += arrED[Number(r)];
        }else if(apos == 'y' && vert == 'n'){
          let r = til.toString() + x;
          tx += arrEU[Number(r)];
        }else if(apos == 'n' && vert == 'y'){
          let r = til.toString() + x;
          tx += arrRD[Number(r)];
        }else if(apos == 'y' && vert == 'y'){
          let r = til.toString() + x;
          tx += arrRU[Number(r)];
        }
        til = 0;
      }else if(x != '~' && x != '`' && x != '|' && x != '='){
        tx += x;
      }else if(x == '='){
        tx += as[z+1];
        cch = 1;
      }
      z++;
    });
    return tx;
  }