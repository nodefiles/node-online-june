let hero = {
    title : "Thor",
    firstname : "Tjor",
    lastname : "Odin son",
    fullname : function(){
        return this.firstname+" "+this.lastname;
    }
};

module.exports = hero;