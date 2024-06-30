let hero = {
    title : "Black Widow",
    firstname : "Natasha",
    lastname : "Romanoff",
    fullname : function(){
        return this.firstname+" "+this.lastname;
    }
};

module.exports = hero;