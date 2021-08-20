/**
 * ¿Qué es un paradigma ?
 * R = Es el estándar de programación para la realización de tareas
 * para llegar al objetivo. Metodologías para llegar a un objetivo.
 * 
 * ¿Qué es un paradigma en programación ?
 * R = Es un conjunto de prácticas y tareas que determinan
 * la forma en la que está estructuraa un software y comó este cumple
 * su objetivo.
 * 
 * - Paradigmas de la programación
 * Estructurado = tiene una estructura 
 * Funcional = mediante funciones
 * Imperactivo = la forma en que tu escribes las ordenes de tu progrma
 * Declarativo =  declaras que hara tu aplicación
 * Orientado a objetos (POO) =  es la forma en que escribiremos nuestro software,
 * donde resolveremos nuestro programa atarvez de objetos
 * 
 *  La base de la programación Orientado a objetos es
 *  la ABSTRACIÓN
 *  ABSTRACIÓN = Representar un objeto cualquiera mediante
 * alguna de sus cualidades.
 * Atributos = Requisitos de nuestra abstracción o apliicasión,
 * caracteristicas, etc.
 * 
 */
console.log("Programando en POO, live server")

//Objetos lireales - un objeto es un tipo de dato

const Nombre = "Aguilar Gutiérrez Victor Manuel"

//OBJETOS LITERALES:
const persona = {
    name: "Victor Manuel",
    lastName: "Aguilar Gutiérrez",
    age: 16,
    hermanos: ["Juan", "Carlos", "JrRon"]
}
// Sintaxis
/**
 * const nombreObjeto {
 *    atributoName: "textContent",
 *    atributoName: "textContent"
 * }
 * 
 */
console.log(typeof persona)
console.log(persona)
//Imprimir solo un atributo de nuestro objeto notación PUNTO
//Sintaxis = NameObject.atributoName
console.log(persona.name)
console.log(typeof (persona.name))//Tipo de dato
////Imprimir solo un atributo de nuestro objeto con notación CORCHETE
console.log(persona["age"])
console.log(persona.hermanos)

// ANIDAR OBJETOS
const personaAnidada = {
    name: "Victor Manuel",
    lastName: "Aguilar Gutiérrez",
    age: 16,
    hermanos: ["Juan", "Carlos", "JrRon"],
    padre: {
        nameFather: "Joel",
        lastNameFather: "Aguilar Aguilar"
    }
}
//Imprimimos un objeto anidado
console.log(personaAnidada.padre)
//Imprimimos un atributo en espesifico de un objeto anidado
console.log(personaAnidada.padre.nameFather)

//Con notación tipo corchere

//Me imprimira los dos valores ["padre"] y ["lastNameFather"]
console.log(personaAnidada["padre"]["lastNameFather"])
//Me imprime solo el utimo valor, ya que con .padre accedemos al
//atributo pero no lo imprimimos, y con corchetes si
console.log(personaAnidada.padre["lastNameFather"])

/** ASIGNACIÓN DE ATRIBUTOS
 * 
 *  De un objeto solo se pueden modificar sus atributos
 *  RECORDAR QUE SE MANEJA EN CASCADA EL CÓDIGO
 *  No se imprimira algo que aun o a sdio creado
 * 
 */
console.log("-----------------------------")
//El objeto persona aun no tiene como atributo genero = "Masculino"
console.log(persona) // No imprimira el atributo .genero = "Masculino"
//Aquí creamos genero y lo inicialisamos, además de asignarlo al
//Objeto persona
persona.genero = "Masculino"//De está manera agreagamos un atributo a nuestro objeto

//Y aqui ya exist el atributo .genero = "Masculino"
console.log(persona) // Si imprimira el atributo .genero = "Masculino"

//Por ejemplo aquó modifique el valor de un atribute, aunque sea
//una cosntante mi objeto
persona.age = 22
console.log(persona.age)

/** NOTACIÓN ES6
 * 
 * 
 */
const NameAsignado = "Juanito",
    lastNameAsignado = "Rodrguez",
    ageAsignada = 23
const parentAsignado = {
    nameParent: "Juan",
    lastNameParent: "Rodrguez Rodrguez"
}
//Creamos un objeto, le damos los valores a nuestro atrbutos con
//otras variables, otra manera de inizializar.
const ObjetoAsignado = {
    NameAsignado: NameAsignado,
    lastNameAsignado: lastNameAsignado,
    ageAsignada: ageAsignada,
    //Incluos anidamos un objeto con etse metodo de asignación
    //ya que persona2 es un objeto
    parentAsignado: parentAsignado
}
console.log("-----------------------------")
console.log(ObjetoAsignado)
console.log("-----------------------------")
// O aun mas simplificad, si el nombre del atributo y la variable 
// que inicializara es el mismo, solo escribes uno, de esta manera

//ESTE OBJETO IMPRIMIRA EXACTAMENTE LO MISMO QUE "ObjetoAsignado"
console.log("Objeto asignado simplificado")
const ObjetoAsignado2 = {
    NameAsignado, // NameAsignado: NameAsignado
    lastNameAsignado, // lastNameAsignado: lastNameAsignado
    ageAsignada, // ageAsignada: ageAsignada
    parentAsignado // parentAsignado: parentAsignadO
}
console.log(ObjetoAsignado2)

/** ATRIBUTOS Y MÉTODOS
 * 
 * Los objetos también tienen métodos
 * 
 * Los métodos nos permiten realizar acciones
 */
 
 console.log("--------------------- MÉTOODOS ---------------------")

 const student = {
    // Atributos
    nameStudent: "Victor Manuel",
    lastNameStudent: "Aguilar Gutiérrez",
    especialidad: "programación",
    // * Métodos - USA NOTACIÓN DE PUNTO PARA ESTE EJEMPLO

    //para acceder a un atributo dentro de tu objeto, y usarlo en tu
    //método, debes primero colocar el nombre de tu objeto y posteriormente
    //el atributo que deseas, ejemplo :student.nameStudent, si intentas colocar
    //solamente  nameStudent, detectaria una variable fuera de tu objeto
    //o incluso marcar error
    presentarse() {
        console.log(`Mi nombre es ${student.nameStudent}  ${student.lastNameStudent} y mi especialidad es ${student.especialidad}`)
        //this funciona exactamente igual
        console.log(`Mi nombre es ${this.nameStudent}  ${this.lastNameStudent} y mi especialidad es ${this.especialidad}`)
    }
 }//student

// de esta manera se imprime el método
 student.presentarse()

 const student2 = {
    // Atributos
    nameStudent: "José Joel",
    lastNameStudent: "Aguilar Gutiérrez",
    especialidad: "medico",
    parent: {
        nameParent1: "Joel",
        lastNameParent1: "Aguilar Aguilar"
    },
    /** Palabra reservada THIS
     * 
     * con this no tendremos que colocar el nombre del objecto, si no que
     * this, referencia lo que esta a su alcane, this
     * funciona exactamente igual, pero esta es mejor practica y
     * si modificamso el nombre del objeto no tendremos que ir a modificar
     * tambén nuestra impreción, ya que this sigue en el mismo scope.
     * 
     */
    presentarse() {
        console.log(`Mi nombre es ${this.nameStudent}  ${this.lastNameStudent} y mi especialidad es ${student.especialidad}`)
    },
    MyParent () {
        //accedemos a un atributo dentro de un objeto que esta añadido dentro de otro objeto
        console.log(`Mi padre es ${this.parent.nameParent1} ${this.parent.lastNameParent1}`)
    }
 }//student

 student2.presentarse()
 student2.MyParent()