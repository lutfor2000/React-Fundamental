const javascript = {

    name: "JavaScript",
    libraries: ["React","Angular","Vue"],

    printLibaries: function(){
        this.libraries.forEach((a)=>{

            console.log(`${this.name} Love ${a}`)
        })
    }

}

javascript.printLibaries()
