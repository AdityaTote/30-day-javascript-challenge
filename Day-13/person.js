const personData = {
    name: "John Deo",
    email: "john@deo.com",
    data(){
        console.log(`Name:${this.name} Email:${this.email}`);
    }
}
module.exports = { personData }