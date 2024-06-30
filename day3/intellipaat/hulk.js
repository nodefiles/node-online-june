let hero = {
    title : "Hulk",
    firstname : "Bruce",
    lastname : "Banner",
    fullname : function(){
        return this.firstname+" "+this.lastname;
    }
};

module.exports = hero;