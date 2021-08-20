
/** Función constructora
 * 
 * Es una función con atributos y métodos ya definidos de 
 * forma que crees objetos ya con atributos definidos, donde solo escribiras
 * lo que contendra cada objeto que generes, ya que una función sontructra
 * genera OBJETOS.
 * 
 * ESTÁ FUNCIÓN ME GENERA OBJETOS (constructora)
 * 
 * Guardamos cada objeto en una variable con nombres diferentes y
 * SIEMPRE usaremos la palabra reservada 
 * "new" + nombre de la funcion Constructora + cada valor de los parametros
 * Ejemplo = UsuarioJoel = new Usuario("Joel", "Aguilar Gutiérrez", "joel@cbtis.com", true)
 */

//Una función constructura te permite crear un molde, que contenga ciertos 
//  atributos que no pueden ser modificados, crea OBJETOS, 
//Una función constructora siempre su nombre con la primera letra mayuscula (Usuario)
// y en singular, SIEMPRE.
function Usuario(nombres, apellidos, correo, activo){
    this.NOMBRES = nombres,     //Parametro 1 de mi molde
    this.APELLIDOS = apellidos, //Parametro 2 de mi molde
    this.CORREO = correo,       //Parametro 3 de mi molde
    this.ACTIVO = activo        //Parametro 4 de mi molde
}
// OBJETO 1, 2, 3, 4 - Creados por función constructora
const UsuarioVictor = new Usuario("Victor Manuel", "Aguilar Gutiérrez", "VictorM@cbtis.com", true),
    UsuarioJoel = new Usuario("Joel", "Aguilar Gutiérrez", "joel@cbtis.com", true),
    UsuarioGael = new Usuario("Gael", "Zandoval Gutiérrez", "gael@cbtis.com", true),
    UsuarioGlen = new Usuario("Glen", "Aguilar  Rodriguez", "glen@cbtis.com", true)

console.log(UsuarioVictor)
console.log(UsuarioJoel)
console.log(UsuarioGael)
console.log(UsuarioGlen)

console.log("--------------------------- CLASES (Clase2.3) ---------------------------------")
// -------------------------- CLASES (Clase2.3) ----------------------------
/**
 * En la POO nos permite crear clases, y de ahi crear objetos
 * 
 * Los metodos nos permiten ejecutar ciertas acciones, en esta caso, acciones
 * con variables de nuestro método constructor
 * 
 */

class Usuario2 {
    //Método constructir, palabra reservada
    constructor(nombres, apellidos, correo, activo){
      this.NOMBRES = nombres,     //Parametro 1 de mi molde
      this.APELLIDOS = apellidos, //Parametro 2 de mi molde
      this.CORREO = correo,       //Parametro 3 de mi molde
      this.ACTIVO = activo        //Parametro 4 de mi molde
    }
    //Método
    //Como buena practica es mejor usar return que console.log(),
    //y mejor imprimimos posterioremnete
    presentarse(){
        return `Hola soy ${this.NOMBRES} y mi correo es ${this.CORREO}`
        //console.log(`Hola soy ${this.NOMBRES} y mi correo es ${this.CORREO}`)
    }
}
//Cada uno de los objetos creados a base de mi clase y mi metodo constructor
// se llaman instanseas, instanceamos un objeto

//Instancea 1 de la clase Usuario2
const UsuarioVictor2 = new Usuario2("Victor Manuel", "Aguilar Gutiérrez", "VictorM@cbtis.com", true),
    //Instancea 2
    UsuarioJoel2 = new Usuario2("Joel", "Aguilar Gutiérrez", "joel@cbtis.com", true),
    //Instancea 3
    UsuarioGael2 = new Usuario2("Gael", "Zandoval Gutiérrez", "gael@cbtis.com", true),
    //Instancea 4
    UsuarioGlen2 = new Usuario2("Glen", "Aguilar  Rodriguez", "glen@cbtis.com", true)

//Imprimos las instanceas con los parametrso ya definidos
console.log(UsuarioVictor2)
console.log(UsuarioJoel2)
console.log(UsuarioGael2)
console.log(UsuarioGlen2)

//IMPRIMIMOS SOLOS METODO
//Imprimimos el método prsentarse() de nuestra clase Usuario2 { }
console.log(UsuarioVictor2.presentarse())
console.log(UsuarioJoel2.presentarse())
console.log(UsuarioGael2.presentarse())
console.log(UsuarioGlen2.presentarse())

/** De esta manera se imprime en consola si usamos console.log() en vez de return
 * 
 * Ejecutamos e imprimimos los métodos
 * UsuarioVictor2.presentarse()
 * UsuarioJoel2.presentarse()
 * UsuarioGael2.presentarse()
 * UsuarioGlen2.presentarse()
 */

// Métodos muy usados en POO - getters y setters IMPORTANTE
/**
 * getters significa -> obtener
 * setters significa -> dar
 */

class Alumno{
    constructor (name, lastName, specialty){
        this.name = name,
        this.lastName = lastName,
        this.specialty = specialty
    }
    //get -> ontener
    //Creamos un método que me devuelve un atributo en especial de nuestro método constructor
    // SIEMPRE INICIANDO CON get + nombre del método como EXELENTE PRACTICA
    // ejemplo = getName(){

    //De esta manera obtenemos valores en especifico de nuestros atributos pero con
    //buenas practicas, auque sea más largo el proceso pero es mejor practica
    getName(){
        return this.name
    }
    getLastName(){
        return this.lastName
    }
    getSpecialty(){
        return  this.specialty
    }
    // set -> dar
    // Creamos métodos que den un nuevo valor a cada uno de los atributos 
    //Siempre iniciando con la palabra set + nombre del método como EXELENTE PRACTICA

    //De esta forma cabiamos valor pero con buenas practicas, auque sea más largo el proceso
    //pero es mejor practica
    setName(NewName){
        this.name = NewName
    }
    setLastName(NewLastName){
        this.lastName = NewLastName
    }
    setSpecialty(NewSpecialty){
        this.specialty = NewSpecialty
    }
}

const Alumno1 = new Alumno("Victor manuel", "Aguilar Gutiérrez", "Programación")
const Alumno2 = new Alumno("Juan", "Anaya Rodriguez", "Programación")
const Alumno3 = new Alumno("Joel", "Ramirez Cisneros", "Programación")
// Imprimimos cada uno de los datos de mi Instancea o objeto llamado Alumno1
/**
 * Está es otra forma de acceder al nombre, cumple la misma funcion que
 * (console.log(Alumno1.getName())), unicamente que esta esta ejecutada mediante un método
 * previamente ya creado, y es considerado una buena practica.
 * 
 * Esta forma tambén es valida, pero no es buena practica -> console.log(Alumno1.name)
 * Buena practica -> console.log(Alumno1.getName())
 * 
 *  getName(){
        return this.name
    }
 * 
 * Tambien es mucmo mejor usar return que console.log() directamente en nuestro método
 * es buena practica usar return y posteriormente imprimir
 */
//Nombre
console.log(Alumno1.getName())
//Apellidos
console.log(Alumno1.getLastName())
//Especiladad
console.log(Alumno1.getSpecialty())

Alumno1.setName("Manuelito")
console.log(Alumno1.getName())

Alumno1.setLastName("Gutiérrez Chavez")
console.log(Alumno1.getLastName())

Alumno1.setSpecialty("Contabilidad")
console.log(Alumno1.getSpecialty())

/**
 * con la palabra reservada "extends", indicamos que nuestra clase, se 
 * exitienda con otra clase, esto significa que mi clase Profesor, tendra
 * los atributos de la clase Usuario, quedando así:
 * 
 * class Profesor extends Usuario{
    constructor (nombres, apellidos, correo, activo, cursosDictados){
        super(nombres, apellidos, correo, activo)
        this.cursosDictados = cursosDictados
    }
   }
 *  Y mediante la palabra reservada "super()" mandamos a llamar a esos
   atrubutos extendidos, para que de esta forma se ejecuten cuando nosotros deseemos
   como parametros dentro de super(), iran todos los parametros de nuestra
   función extendida.

   NO SOLO SE EXTIENDEN LOS ATRIBUTOS, SI NO TAMBIÉN LOS MÉTODOS
 */
//Extiendo mi clase Profesor con atributos de mi clase Usuario
class Profesor extends Usuario{
    constructor (nombres, apellidos, correo, activo, cursosDictados){
        super(nombres, apellidos, correo, activo)//Llamo a mis atributos dUsuario
        this.cursosDictados = cursosDictados
    }
}
const Profesor1 = new Profesor("Ángel", "Gonzales", "Angel@gmail", true, "HTML, CSS, y POO")
console.log(Profesor1)

//Extiendo mi clase AlumnoEscolar con atributos de mi clase Usuario
class AlumnoEscolar extends Usuario2{
    constructor (nombres, apellidos, correo, activo, cursosTomados){
        super(nombres, apellidos, correo, activo)
        this.cursosTomados = cursosTomados
    }
}
const AlumnoManuelito = new AlumnoEscolar("Manuelito", "Aguilar", "manuelito@gmail", true, "HTML, CSS, JS0, JS Navegador y POO")
console.log(AlumnoManuelito)

//Aquí a travez de "AlumnoManuelito", usare un metodo heredado por "Usuario2"
//Usuario 2 tiene un método llamado prsentase(), y lo hereda mi clase 
//"AlumnoEscolar", y por ello lo puedo usar desde "AlumnoEscolar"

console.log(AlumnoManuelito.presentarse())