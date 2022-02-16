#include <stdio.h>
#include "header.h"

int main(int argc, char* argv[]){
    float firstNum;
    float secondNum;
    char loop = 0;
    while(loop == 0){
        int option;
        menu();
        scanf("%d", &option);
        switch(option){
            case 1:
                sum(&firstNum, &secondNum);
                break;
            case 2:
                sub(&firstNum, &secondNum);
                break;
            case 3:
                div(&firstNum, &secondNum);
                break;
            case 4:
                mult(&firstNum, &secondNum);
                break;
            case 5:
                loop = 1;
                printf("Saliendo.");
                break;
            default:
                printf("No es opcion valida");
                break;
        }
    }
}