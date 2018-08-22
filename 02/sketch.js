function setup() {
  createCanvas(724, 760);
  background(255);

  var a = 30//tamaño
  var y = 0

    fill(0) // S 2 - A
  for (var i = 8; i < 9; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  for (var i = 9; i < 10; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 10; i < 11; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  for (var i = 11; i < 12; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
}
  for (var i = 12; i < 13; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  for (var i = 13; i < 14; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 14; i < 15; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  for (var i = 15; i < 16; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
}
  //
  var y = 60
  for (var i = 8; i < 9; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  for (var i = 9; i < 10; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
}
  for (var i = 10; i < 11; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  for (var i = 11; i < 12; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 12; i < 13; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  for (var i = 13; i < 14; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
}
  for (var i = 14; i < 15; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  for (var i = 15; i < 16; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  
  // Variable 
  var y = 120
  
    fill(0) // S 1 - A
  for (var i = 8; i < 9; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  for (var i = 9; i < 10; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 10; i < 11; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  for (var i = 11; i < 12; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
}
  for (var i = 12; i < 13; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  for (var i = 13; i < 14; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 14; i < 15; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  for (var i = 15; i < 16; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
}
  
  //variable 180
  
  var y = 180
  for (var i = 8; i < 9; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  for (var i = 9; i < 10; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
}
  for (var i = 10; i < 11; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  for (var i = 11; i < 12; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 12; i < 13; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  for (var i = 13; i < 14; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
}
  for (var i = 14; i < 15; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  for (var i = 15; i < 16; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  
  // S2 - B
  
  var y = 480

    fill(0) // S 2 - A
  for (var i = 8; i < 9; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  for (var i = 9; i < 10; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 10; i < 11; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  for (var i = 11; i < 12; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
}
  for (var i = 12; i < 13; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  for (var i = 13; i < 14; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 14; i < 15; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  for (var i = 15; i < 16; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
}
  //
  var y = 540
  for (var i = 8; i < 9; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  for (var i = 9; i < 10; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
}
  for (var i = 10; i < 11; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  for (var i = 11; i < 12; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 12; i < 13; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  for (var i = 13; i < 14; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
}
  for (var i = 14; i < 15; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  for (var i = 15; i < 16; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  
  // Variable 
  var y = 600
  
    fill(0) // S 1 - A
  for (var i = 8; i < 9; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  for (var i = 9; i < 10; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 10; i < 11; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  for (var i = 11; i < 12; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
}
  for (var i = 12; i < 13; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  for (var i = 13; i < 14; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 14; i < 15; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  for (var i = 15; i < 16; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
}
  
  //variable 660
  
  var y = 660
  for (var i = 8; i < 9; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  for (var i = 9; i < 10; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
}
  for (var i = 10; i < 11; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  for (var i = 11; i < 12; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 12; i < 13; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  for (var i = 13; i < 14; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
}
  for (var i = 14; i < 15; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  for (var i = 15; i < 16; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}// S2 -B
  
  
 //S 1 - A
  var y = 0

  fill(0) // S 1 - A
  for (var i = 0; i < 1; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }

  for (var i = 1; i < 2; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for (var i = 2; i < 3; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  for (var i = 3; i < 4; i = i + 1) {
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 3; i < 4; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a); //2
  }
  for (var i = 4; i < 5; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 5; i < 6; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for (var i = 6; i < 7; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  for (var i = 7; i < 8; i = i + 1) {
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 7; i < 8; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a); //2
  }

  // Variable 
  var y = 120
  
  for (var i = 0; i < 1; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }

  for (var i = 1; i < 2; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for (var i = 2; i < 3; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  for (var i = 3; i < 4; i = i + 1) {
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 3; i < 4; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a); //2
  }
  for (var i = 4; i < 5; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 5; i < 6; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for (var i = 6; i < 7; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  for (var i = 7; i < 8; i = i + 1) {
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 7; i < 8; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a); //2
  } // S1 - A Variable 120 



  // S3 - A Variable 0
  var y = 0
  for (var i = 16; i < 17; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }

  for (var i = 17; i < 18; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for (var i = 18; i < 19; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  for (var i = 19; i < 20; i = i + 1) {
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 19; i < 20; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a); //2
  }
  for (var i = 20; i < 21; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 21; i < 22; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for (var i = 22; i < 23; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  for (var i = 23; i < 24; i = i + 1) {
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 23; i < 24; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a); //2
  } // S3 - A Variable 0

  
  //Variable 120
  var y = 120;
  for (var i = 16; i < 17; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }

  for (var i = 17; i < 18; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for (var i = 18; i < 19; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  for (var i = 19; i < 20; i = i + 1) {
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 19; i < 20; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a); //2
  }
  for (var i = 20; i < 21; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 21; i < 22; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for (var i = 22; i < 23; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  for (var i = 23; i < 24; i = i + 1) {
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 23; i < 24; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a); //2
  }
  
  // S2 - A 
  var y = 60
  
   for(var i = 0; i < 1; i = i+1) {
  	triangle(i*a, y, a+i, y, a+i, y + a); 
    triangle(i*a, y + a, a+i*a, y + a, a+i, y + (a * 2));
  }
  
  for(var i = 1; i < 2; i = i+1) {
  triangle(a+i, y + a, a+i, y + (a * 2), (a * 2)+ i , y + (a *2));
  }
  
  
  for(var i = 1; i < 2; i = i+1) {
  triangle(a+i, y, (a *2)+i, y, (a *2)+i, y + a);//2
  }
  
  for(var i = 2; i < 3; i = i+1) {
  	triangle((a *2) + i , y, (a *2)+ i, y +a, (a *3) +i, y + a );
    triangle((a *2)+i, y + a, (a *2)+ i, y + (a *2), (a *3)+i, y + (a *2)); 
  }
  for(var i = 3; i < 4; i = i+1) {
  	triangle((a *3) + i, y, (a *3)+i, y + a, (a *4)+i, y + a);
    triangle((a *3) + i, y + a, (a *4) + i, y + a, (a *4)+i, y + (a * 2));// 1
  }
   for(var i = 4; i < 5; i = i+1) {
  	triangle(i*a, y, a+i*a, y, a+i*a, y + a); 
    triangle(i*a, y + a, a+i*a, y + a, a+i*a, y + (a * 2));
  }
  
  for(var i = 4; i < 5; i = i+1) {
  triangle(a+i*a, y + a, a+i*a, y + (a * 2), (a * 2)+ i *a, y + (a * 2));
  }
  
  for(var i = 4; i < 5; i = i+1) {
  triangle(a+i*a, y, (a * 2)+i*a, y,(a * 2)+i*a, y + a);//2
  }
  
  for(var i = 4; i < 5; i = i+1) {
  	triangle((a * 2) + i * a, y, (a * 2) + i *a, y + a, (a * 3) + i *a, y + a);
    triangle((a * 2) + i *a, y + a, (a * 2) + i *a, y + (a* 2), (a *7)+i, y + (a*2));
  }

  for(var i = 4; i < 5; i = i+1) {
  	triangle((a * 3) + i*a, y, (a * 3)+i*a, y + a, (a * 4)+i*a, y + a);
    triangle((a * 3) + i*a, y + a, (a * 4)+ i*a, y + a, y + (a*2)+i*a, y + (a*2));// 1
  }
  
  //S2 -B 
  
   for(var i = 16; i < 17; i = i+1) {
  	triangle(i*a, y, a+i* a, y, a+i*a, y + a); 
    triangle(i* a, y + a, a+i*a, y + a, a+i*a , y + (a *2));
  }
  
  for(var i = 16; i < 17; i = i+1) {
  triangle(a+i*a, y + a, a+i*a, y + (a*2), (a *2)+ i *a, y + (a*2));
  }
  
  for(var i = 16; i < 17; i = i+1) {
  triangle(a+i*a, y, (a*2)+i*a, y, (a*2)+i*a, y + a);//2
  }

  for (var i = 18; i < 19; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for(var i = 19; i < 20; i = i+1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for(var i = 20; i < 21; i = i+1) {
  	triangle(i*a, y, a+i* a, y, a+i*a, y + a); 
    triangle(i* a, y + a, a+i*a, y + a, a+i*a , y + (a *2));
  }
     for(var i = 20; i < 21; i = i+1) {
  triangle(a+i*a, y + a, a+i*a, y + (a*2), (a *2)+ i *a, y + (a*2));
  }
  
  for(var i = 20; i < 21; i = i+1) {
  triangle(a+i*a, y, (a*2)+i*a, y, (a*2)+i*a, y + a);//2
  }
  for (var i = 22; i < 23; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 23; i < 24; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  
  // variable 180
var y = 180
  
for(var i = 0; i < 1; i = i+1) {
  	triangle(i*a, y, a+i, y, a+i, y + a); 
    triangle(i*a, y + a, a+i*a, y + a, a+i, y + (a * 2));
  }
  
  for(var i = 1; i < 2; i = i+1) {
  triangle(a+i, y + a, a+i, y + (a * 2), (a * 2)+ i , y + (a *2));
  }
  
  
  for(var i = 1; i < 2; i = i+1) {
  triangle(a+i, y, (a *2)+i, y, (a *2)+i, y + a);//2
  }
  
  for(var i = 2; i < 3; i = i+1) {
  	triangle((a *2) + i , y, (a *2)+ i, y +a, (a *3) +i, y + a );
    triangle((a *2)+i, y + a, (a *2)+ i, y + (a *2), (a *3)+i, y + (a *2)); 
  }
  for(var i = 3; i < 4; i = i+1) {
  	triangle((a *3) + i, y, (a *3)+i, y + a, (a *4)+i, y + a);
    triangle((a *3) + i, y + a, (a *4) + i, y + a, (a *4)+i, y + (a * 2));// 1
  }
   for(var i = 4; i < 5; i = i+1) {
  	triangle(i*a, y, a+i*a, y, a+i*a, y + a); 
    triangle(i*a, y + a, a+i*a, y + a, a+i*a, y + (a * 2));
  }
  
  for(var i = 4; i < 5; i = i+1) {
  triangle(a+i*a, y + a, a+i*a, y + (a * 2), (a * 2)+ i *a, y + (a * 2));
  }
  
  for(var i = 4; i < 5; i = i+1) {
  triangle(a+i*a, y, (a * 2)+i*a, y,(a * 2)+i*a, y + a);//2
  }
  
  for(var i = 4; i < 5; i = i+1) {
  	triangle((a * 2) + i * a, y, (a * 2) + i *a, y + a, (a * 3) + i *a, y + a);
    triangle((a * 2) + i *a, y + a, (a * 2) + i *a, y + (a* 2), (a *7)+i, y + (a*2));
  }
  for(var i = 4; i < 5; i = i+1) {
   	triangle((a * 3) + i*a, y, (a * 3)+i*a, y + a, (a * 4)+i*a, y + a);
    triangle((a * 3) + i*a, y + a, (a * 3)+i*a, y + (a * 2), (a * 4)+i*a, y + (a * 2));
  }

  // 
for(var i = 16; i < 17; i = i+1) {
  	triangle(i*a, y, a+i*a, y, a+i*a, y + a); 
    triangle(i*a, y + a, a+i*a, y + a, a+i*a, y + (a * 2));
  }
  
  for(var i = 16; i < 17; i = i+1) {
  triangle(a+i*a, y + a, a+i*a, y + (a * 2), (a * 2)+ i * a , y + (a *2));
  }
  
  for(var i = 16; i < 17; i = i+1) {
  triangle(a+i*a, y, (a *2)+i*a, y, (a *2)+i*a, y + a);//2
  }

  for(var i = 16; i < 17; i = i+1) {
  	triangle((a *2) + i*a , y, (a *2)+ i*a, y +a, (a *3) +i*a, y + a );
    triangle((a *2)+i*a, y + a, (a *2)+ i*a, y + (a *2), (a *3)+i*a, y + (a *2)); 
  }
  for(var i = 16; i < 17; i = i+1) {
  	triangle((a *3) + i *a, y, (a *3)+i* a, y + a, (a *4)+i * a, y + a);
    triangle((a *3) + i *a, y + a, (a *4) + i* a, y + a, (a *4)+i * a, y + (a * 2));// 1
  }
   for(var i = 20; i < 21; i = i+1) {
  	triangle(i*a, y, a+i*a, y, a+i*a, y + a); 
    triangle(i*a, y + a, a+i*a, y + a, a+i*a, y + (a * 2));
  }
  
  for(var i = 20; i < 21; i = i+1) {
  triangle(a+i*a, y + a, a+i*a, y + (a * 2), (a * 2)+ i *a, y + (a * 2));
  }
  
  for(var i = 20; i < 21; i = i+1) {
  triangle(a+i*a, y, (a * 2)+i*a, y,(a * 2)+i*a, y + a);//2
  }
  
  for (var i = 22; i < 23; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  
  for (var i = 23; i < 24; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  
  for (var i = 23; i < 24; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  var y = 480

  fill(0) // S 1 - A
  for (var i = 0; i < 1; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }

  for (var i = 1; i < 2; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for (var i = 2; i < 3; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  for (var i = 3; i < 4; i = i + 1) {
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 3; i < 4; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a); //2
  }
  for (var i = 4; i < 5; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 5; i < 6; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for (var i = 6; i < 7; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  for (var i = 7; i < 8; i = i + 1) {
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 7; i < 8; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a); //2
  }

  // Variable 250
  var y = 600
  for (var i = 0; i < 1; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }

  for (var i = 1; i < 2; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for (var i = 2; i < 3; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  for (var i = 3; i < 4; i = i + 1) {
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 3; i < 4; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a); //2
  }
  for (var i = 4; i < 5; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 5; i < 6; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for (var i = 6; i < 7; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  for (var i = 7; i < 8; i = i + 1) {
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 7; i < 8; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a); //2
  } // S1 - A Variable 120 
  
  //
  // S2 - A 
  //S2 - A 
  var y = 540
  
   for(var i = 0; i < 1; i = i+1) {
  	triangle(i*a, y, a+i, y, a+i, y + a); 
    triangle(i*a, y + a, a+i*a, y + a, a+i, y + (a * 2));
  }
  
  for(var i = 1; i < 2; i = i+1) {
  triangle(a+i, y + a, a+i, y + (a * 2), (a * 2)+ i , y + (a *2));
  }
  
  
  for(var i = 1; i < 2; i = i+1) {
  triangle(a+i, y, (a *2)+i, y, (a *2)+i, y + a);//2
  }
  
  for(var i = 2; i < 3; i = i+1) {
  	triangle((a *2) + i , y, (a *2)+ i, y +a, (a *3) +i, y + a );
    triangle((a *2)+i, y + a, (a *2)+ i, y + (a *2), (a *3)+i, y + (a *2)); 
  }
  for(var i = 3; i < 4; i = i+1) {
  	triangle((a *3) + i, y, (a *3)+i, y + a, (a *4)+i, y + a);
    triangle((a *3) + i, y + a, (a *4) + i, y + a, (a *4)+i, y + (a * 2));// 1
  }
   for(var i = 4; i < 5; i = i+1) {
  	triangle(i*a, y, a+i*a, y, a+i*a, y + a); 
    triangle(i*a, y + a, a+i*a, y + a, a+i*a, y + (a * 2));
  }
  
  for(var i = 4; i < 5; i = i+1) {
  triangle(a+i*a, y + a, a+i*a, y + (a * 2), (a * 2)+ i *a, y + (a * 2));
  }
  
  for(var i = 4; i < 5; i = i+1) {
  triangle(a+i*a, y, (a * 2)+i*a, y,(a * 2)+i*a, y + a);//2
  }
  
  for(var i = 4; i < 5; i = i+1) {
  	triangle((a * 2) + i * a, y, (a * 2) + i *a, y + a, (a * 3) + i *a, y + a);
    triangle((a * 2) + i *a, y + a, (a * 2) + i *a, y + (a* 2), (a *7)+i, y + (a*2));
  }

  for (var i = 7; i < 8; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
 
  //S2 - A 
  var y = 660
  
   for(var i = 0; i < 1; i = i+1) {
  	triangle(i*a, y, a+i, y, a+i, y + a); 
    triangle(i*a, y + a, a+i*a, y + a, a+i, y + (a * 2));
  }
  
  for(var i = 1; i < 2; i = i+1) {
  triangle(a+i, y + a, a+i, y + (a * 2), (a * 2)+ i , y + (a *2));
  }
  
  
  for(var i = 1; i < 2; i = i+1) {
  triangle(a+i, y, (a *2)+i, y, (a *2)+i, y + a);//2
  }
  
  for(var i = 2; i < 3; i = i+1) {
  	triangle((a *2) + i , y, (a *2)+ i, y +a, (a *3) +i, y + a );
    triangle((a *2)+i, y + a, (a *2)+ i, y + (a *2), (a *3)+i, y + (a *2)); 
  }
  for(var i = 3; i < 4; i = i+1) {
  	triangle((a *3) + i, y, (a *3)+i, y + a, (a *4)+i, y + a);
    triangle((a *3) + i, y + a, (a *4) + i, y + a, (a *4)+i, y + (a * 2));// 1
  }
   for(var i = 4; i < 5; i = i+1) {
  	triangle(i*a, y, a+i*a, y, a+i*a, y + a); 
    triangle(i*a, y + a, a+i*a, y + a, a+i*a, y + (a * 2));
  }
  
  for(var i = 4; i < 5; i = i+1) {
  triangle(a+i*a, y + a, a+i*a, y + (a * 2), (a * 2)+ i *a, y + (a * 2));
  }
  
  for(var i = 4; i < 5; i = i+1) {
  triangle(a+i*a, y, (a * 2)+i*a, y,(a * 2)+i*a, y + a);//2
  }
  
  for(var i = 4; i < 5; i = i+1) {
  	triangle((a * 2) + i * a, y, (a * 2) + i *a, y + a, (a * 3) + i *a, y + a);
    triangle((a * 2) + i *a, y + a, (a * 2) + i *a, y + (a* 2), (a *7)+i, y + (a*2));
  }

  for (var i = 7; i < 8; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  
//
  var y = 480

  fill(0) // S 1 - A
  for (var i = 16; i < 17; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }

  for (var i = 17; i < 18; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for (var i = 18; i < 19; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  for (var i = 19; i < 20; i = i + 1) {
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 19; i < 20; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a); //2
  }
  for (var i = 20; i < 21; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 21; i < 22; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for (var i = 22; i < 23; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  for (var i = 23; i < 24; i = i + 1) {
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 23; i < 24; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a); //2
  }

  // Variable 250
  var y = 600
  for (var i = 16; i < 17; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }

  for (var i = 17; i < 18; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for (var i = 18; i < 19; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  for (var i = 19; i < 20; i = i + 1) {
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 19; i < 20; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a); //2
  }
  for (var i = 20; i < 21; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 21; i < 22; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for (var i = 22; i < 23; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  for (var i = 23; i < 24; i = i + 1) {
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 23; i < 24; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a); //2
  } // S1 - A Variable 120 
  
  //
  // S2 - A 
  //S2 - A 
  var y = 540
  
   for(var i = 16; i < 17; i = i+1) {
  	triangle(i * a, y, a + i * a, y, a + i * a, y + a); 
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  
  for(var i = 16; i < 17; i = i+1) {
  triangle(a+i*a, y + a, a+i*a, y + (a * 2), (a * 2)+ i*a , y + (a *2));
  }
  
  
  for(var i = 16; i < 17; i = i+1) {
  triangle(a+i*a, y, (a *2)+i* a, y, (a *2)+i* a, y + a);//2
  }
  
  for(var i = 16; i < 17; i = i+1) {
  	triangle((a *2) + i *a, y, (a *2)+ i*a, y +a, (a *3) +i *a, y + a );
    triangle((a *2)+i*a, y + a, (a *2)+ i*a, y + (a *2), (a *3)+i *a , y + (a *2)); 
  }
  for(var i = 16; i < 17; i = i+1) {
  	triangle((a *3) + i* a, y, (a *3)+i* a, y + a, (a *4)+i* a, y + a);
    triangle((a *3) + i * a, y + a, (a *4) + i *a, y + a, (a *4)+i * a, y + (a * 2));// 1
  }
   for(var i = 20; i < 21; i = i+1) {
  	triangle(i*a, y, a+i*a, y, a+i*a, y + a); 
    triangle(i*a, y + a, a+i*a, y + a, a+i*a, y + (a * 2));
  }
  
  for(var i = 20; i < 21; i = i+1) {
  triangle(a+i*a, y + a, a+i*a, y + (a * 2), (a * 2)+ i *a, y + (a * 2));
  }
  
  for(var i = 20; i < 21; i = i+1) {
  triangle(a+i*a, y, (a * 2)+i*a, y,(a * 2)+i*a, y + a);//2
  }

  for (var i = 22; i < 23; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
 
   for (var i = 23; i < 24; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  //S2 - A 
  var y = 660
  
   for(var i = 16; i < 17; i = i+1) {
  	triangle(i * a, y, a + i * a, y, a + i * a, y + a); 
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  
  for(var i = 16; i < 17; i = i+1) {
  triangle(a+i*a, y + a, a+i*a, y + (a * 2), (a * 2)+ i*a , y + (a *2));
  }
  
  
  for(var i = 16; i < 17; i = i+1) {
  triangle(a+i*a, y, (a *2)+i* a, y, (a *2)+i* a, y + a);//2
  }
  
  for(var i = 16; i < 17; i = i+1) {
  	triangle((a *2) + i *a, y, (a *2)+ i*a, y +a, (a *3) +i *a, y + a );
    triangle((a *2)+i*a, y + a, (a *2)+ i*a, y + (a *2), (a *3)+i *a , y + (a *2)); 
  }
  for(var i = 16; i < 17; i = i+1) {
  	triangle((a *3) + i* a, y, (a *3)+i* a, y + a, (a *4)+i* a, y + a);
    triangle((a *3) + i * a, y + a, (a *4) + i *a, y + a, (a *4)+i * a, y + (a * 2));// 1
  }
   for(var i = 20; i < 21; i = i+1) {
  	triangle(i*a, y, a+i*a, y, a+i*a, y + a); 
    triangle(i*a, y + a, a+i*a, y + a, a+i*a, y + (a * 2));
  }
  
  for(var i = 20; i < 21; i = i+1) {
  triangle(a+i*a, y + a, a+i*a, y + (a * 2), (a * 2)+ i *a, y + (a * 2));
  }
  
  for(var i = 20; i < 21; i = i+1) {
  triangle(a+i*a, y, (a * 2)+i*a, y,(a * 2)+i*a, y + a);//2
  }

  for (var i = 22; i < 23; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
 
   for (var i = 23; i < 24; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  
  // CENTRO 
  
  //Derecha e izquierda 
  var y = 240

  fill (0);
  for (var i = 0; i < 1; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
}
  for (var i = 1; i < 2; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  for (var i = 2; i < 3; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 3; i < 4; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  for (var i = 4; i < 5; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
}
  for (var i = 5; i < 6; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  for (var i = 6; i < 7; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 7; i < 8; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  
  // Primera secuencia - B. 
  
  var y = 360

  fill (0); // S 2 - A
  for (var i = 0; i < 1; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
}
  for (var i = 1; i < 2; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  for (var i = 2; i < 3; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 3; i < 4; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  for (var i = 4; i < 5; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
}
  for (var i = 5; i < 6; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  for (var i = 6; i < 7; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 7; i < 8; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }

  // segunda secuencia 
  
  var y= 300
  
  for (var i = 0; i < 1; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 1; i < 2; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  
  for (var i = 2; i < 3; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
 }
  for (var i = 3; i < 4; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
	for (var i = 4; i < 5; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 5; i < 6; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  for (var i = 6; i < 7; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
 }
  for (var i = 7; i < 8; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  
  // Segunda - B
  var y= 420
  
  for (var i = 0; i < 1; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 1; i < 2; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  
  for (var i = 2; i < 3; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
 }
  for (var i = 3; i < 4; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
	for (var i = 4; i < 5; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 5; i < 6; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  for (var i = 6; i < 7; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
 }
  for (var i = 7; i < 8; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  
  //Primera secuencia 
  var y = 240

  fill (0); // S 2 - A
  for (var i = 16; i < 17; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
}
  for (var i = 17; i < 18; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  for (var i = 18; i < 19; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 19; i < 20; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  for (var i = 20; i < 21; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
}
  for (var i = 21; i < 22; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  for (var i = 22; i < 23; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 23; i < 24; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  
  // Primera secuencia - B. 
  
  var y = 360

  fill (0); // S 2 - A
  for (var i = 16; i < 17; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
}
  for (var i = 17; i < 18; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  for (var i = 18; i < 19; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 19; i < 20; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  for (var i = 20; i < 21; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
}
  for (var i = 21; i < 22; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  for (var i = 22; i < 23; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 23; i < 24; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  
  //Segunda secuencia 
  
  var y= 300
  
  for (var i = 16; i < 17; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 17; i < 18; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  
  for (var i = 18; i < 19; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
 }
  for (var i = 19; i < 20; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
	for (var i = 20; i < 21; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 21; i < 22; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  for (var i = 22; i < 23; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
 }
  for (var i = 23; i < 24; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
  
  // Segunda - B
  var y= 420
  
  for (var i = 16; i < 17; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 17; i < 18; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  
  for (var i = 18; i < 19; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
 }
  for (var i = 19; i < 20; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }
	for (var i = 20; i < 21; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
}
  for (var i = 21; i < 22; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + (a * 2), a + i * a, y + (a * 2), a + i * a, y + a);
  }
  for (var i = 22; i < 23; i = i + 1) {
    triangle(i * a, y, a + i * a, y , i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
 }
  for (var i = 23; i < 24; i = i + 1) {
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y);
    triangle(i * a, y + a, a + i * a, y + a, i * a, y + (a * 2));
  }  

//Centro 

  var y = 240

  fill(0) // S 1 - A
 
  for (var i = 8; i < 9; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for (var i = 9; i < 10; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  for (var i = 10; i < 11; i = i + 1) {
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 10; i < 11; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a); //2
  }
  for (var i = 11; i < 12; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 12; i < 13; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for (var i = 13; i < 14; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  for (var i = 14; i < 15; i = i + 1) {
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 14; i < 15; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a); //2
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
  }
for (var i = 15; i < 16; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  
  // 
  
  var y = 360 
  
  for (var i = 8; i < 9; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for (var i = 9; i < 10; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  for (var i = 10; i < 11; i = i + 1) {
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 10; i < 11; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a); //2
  }
  for (var i = 11; i < 12; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 12; i < 13; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for (var i = 13; i < 14; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  for (var i = 14; i < 15; i = i + 1) {
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 14; i < 15; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a); //2
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
  }
for (var i = 15; i < 16; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  
  // Segunda centro 

  var y = 300
  
  for (var i = 8; i < 9; i = i + 1) {
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
    triangle(i * a, y, a + i * a, y, a + i * a, y + a); //2
  }
  for (var i = 9; i < 10; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 10; i < 11; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for (var i = 11; i < 12; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  for (var i = 12; i < 13; i = i + 1) {
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 12; i < 13; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a); //2
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
  }
for (var i = 13; i < 14; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
for (var i = 14; i < 15; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for (var i = 15; i < 16; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }

  // Variable 
  
  var y = 420 
  
  for (var i = 8; i < 9; i = i + 1) {
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
    triangle(i * a, y, a + i * a, y, a + i * a, y + a); //2
  }
  for (var i = 9; i < 10; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 10; i < 11; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for (var i = 11; i < 12; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  for (var i = 12; i < 13; i = i + 1) {
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
  for (var i = 12; i < 13; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a); //2
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
  }
for (var i = 13; i < 14; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, i * a, y + (a * 2), a + i * a, y + (a * 2));
  }
for (var i = 14; i < 15; i = i + 1) {
    triangle(i * a, y, i * a, y + a, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2)); //1
  }
  for (var i = 15; i < 16; i = i + 1) {
    triangle(i * a, y, a + i * a, y, a + i * a, y + a);
    triangle(i * a, y + a, a + i * a, y + a, a + i * a, y + (a * 2));
  }
  
  //Cuadrado
  fill (236, 232, 233, 200);
  noStroke();
  rect(240, 240, 482, 482)
}
  
  
 

  
  
  
  
  
  
  
  
  
  