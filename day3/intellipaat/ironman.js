let hero = {
    title : "Ironman",
    firstname : "Tony",
    lastname : "Stark",
    fullname : function(){
        return this.firstname+" "+this.lastname;
    }
};

module.exports = hero;