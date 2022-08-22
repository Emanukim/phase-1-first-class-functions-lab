const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


const returnFirstTwoDrivers = function(){
    let twoDrivers;
    return twoDrivers = [...drivers.slice(0,2)]
};


const returnLastTwoDrivers = function(){
    let lastDrivers;
    return lastDrivers = [...drivers.slice(-2)]
};

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(A){
    return function(){
        return A*5;
}}


function fareDoubler(n){
    return n*2;

}

function fareTripler(v){
    return v*3;
}


function selectDifferentDrivers(drivers,fn){
   if(fn===returnFirstTwoDrivers){
            return drivers.slice(0,2);
    }
        else if(fn===returnLastTwoDrivers){
                return drivers.slice(-2);
        }
};