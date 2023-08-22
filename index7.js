function bmiCalculator(peso, altura) {
    var bmi = Math.round(peso / (altura * altura));

    if (bmi < 18.5 ) {
        return("Seu bmi é: " + bmi + " e " + "Você está abaixo do seu peso");
    } else if (bmi > 24.9) {
        return("Seu bmi é: " + bmi + " e " + "Você está acima do peso")
    } else {
        return("Seu bmi é: " + bmi + " e " + "Você está em seu peso normal")
    }
}

console.log(bmiCalculator(100,1.81));