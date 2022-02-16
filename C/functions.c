#include "header.h"

void print(const char *msg,float *num){
    printf(msg);
    scanf("%f", num);
}

void sum(float *firstNum, float *secondNum){
    
    print("Ingrese el primer numero ", firstNum);
    print("Ingrese el segundo numero ", secondNum);
    result((*firstNum) + (*secondNum));
}
void sub(float *firstNum, float *secondNum){
    print("Ingrese el primer numero ", firstNum);
    print("Ingrese el segundo numero ", secondNum);
    result((*firstNum) - (*secondNum));
}
void div(float *firstNum, float *secondNum){
    print("Ingrese el primer numero ", firstNum);
    print("Ingrese el segundo numero  ", secondNum);
    if(*secondNum == 0){
        printf("No se puede dividir por 0\n");
        return;
    }
    result((*firstNum) / (*secondNum));
}
void mult(float *firstNum, float *secondNum){
    print("Ingrese el primer numero ", firstNum);
    print("Ingrese el segundo numero ", secondNum);
    result((*firstNum) * (*secondNum));
}

void result(float res){
    printf("El resultado es: %g\n", res);
}
void menu(){
    printf("Elija la operacion deseada.\n");
    printf("\t1.Suma\n");
    printf("\t2.Resta\n");
    printf("\t3.Division\n");
    printf("\t4.Multiplicacion\n");
    printf("\t5.Salir\n");
}