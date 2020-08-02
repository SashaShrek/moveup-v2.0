function InCry(data){
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
  
    let arrN = new Array(10);
    arrN[0] = 0;
    arrN[1] = 1;
    arrN[2] = 2;
    arrN[3] = 3;
    arrN[4] = 4;
    arrN[5] = 5;
    arrN[6] = 6;
    arrN[7] = 7;
    arrN[8] = 8;
    arrN[9] = 9;
  
    arrN.map(x =>{
      data = data.replace(new RegExp(x, 'g'), '=' + x.toString());
    });
  
    let w = 0;
    arrEU.map(x =>{
      let z = w < 10 ? w + '`' : (w >= 10 && w < 20) ? '~' + w.toString().substr(1, w.toString().length) + '`' : (w >= 20) ? '~~' +
                                                                    w.toString().substr(1, w.toString().length) + '`' : '' ;
      data = data.replace(new RegExp(x, 'g'), z);
      w++;
    });
    w = 0;
    arrED.map(x =>{
      let z = w < 10 ? w : (w >= 10 && w < 20) ? '~' + w.toString().substr(1, w.toString().length) : (w >= 20) ? '~~' +
                                                                    w.toString().substr(1, w.toString().length) : '' ;
      data = data.replace(new RegExp(x, 'g'), z);
      w++;
    });
    w = 0;
    arrRU.map(x =>{
      let z = w < 10 ? w + '`|' : (w >= 10 && w < 20) ? '~' + w.toString().substr(1, w.toString().length) + '`|' : (w >=20 && w < 30) ? '~~' +
                                                                    w.toString().substr(1, w.toString().length) + '`|' : (w >= 30) ? '~~~' +
                                                                    w.toString().substr(1, w.toString().length) + '`|' : '' ;
      data = data.replace(new RegExp(x, 'g'), z);
      w++;
    });
    w = 0;
    arrRD.map(x =>{
      let z = w < 10 ? w + '|' : (w >= 10 && w < 20) ? '~' + w.toString().substr(1, w.toString().length) + '|' : (w >=20 && w < 30) ? '~~' +
                                                                    w.toString().substr(1, w.toString().length) + '|' : (w >= 30) ? '~~~' +
                                                                    w.toString().substr(1, w.toString().length) + '|' : '' ;
      data = data.replace(new RegExp(x, 'g'), z);
      w++;
    });
    return data;
  }