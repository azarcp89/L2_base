function createPhoneNumber(numbers){
    let result = '(';
    for(let i = 0; i < 3;i++){
        result += numbers[i];
    }
    result+=') ';

    for(let i = 3; i < 6;i++){
        result += numbers[i];
    }
    result+='-';
    for(let i = 6; i < 10;i++){
        result += numbers[i];
    }
    return result;
}