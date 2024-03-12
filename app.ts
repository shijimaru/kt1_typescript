class User{ 
    name: string; 
    readonly login: string; 
    protected password: string; 
    private grade: number; 
    static count: number = 0; 
 
    constructor(name: string, login: string, password: string, grade: number){ 
         this.name = name; 
         this.login = login; 
         this.password = password; 
         this.grade = grade; 
         User.count++ 
    } 
 
    set Login(login:string){ 
        console.log("Невозможно изменить логин!") 
    } 
 
    set Password(password:string){ 
        console.log("***********") 
    }  
     
    set Grade(grade:string){ 
        console.log("Неизвестно свойство grade!") 
    } 
 
    static show_info(user: User) { 
        console.log(user.name, user.login) 
    } 

    eq(user: User) { 
        return this.grade === user.grade 
    }

    lt(user: User) { 
        return this.grade > user.grade 
    }

    gt(user: User) { 
        return this.grade < user.grade 
    }
} 
 
class SuperUser extends User{ 
    name: string; 
    login: string; 
    password: string; 
    role: string; 
    static count: number; 
 
    constructor(_name: string, _login: string, _password: string, _grade: number, _role: string){ 
        super(_name, _login, _password,_grade) 
        this.name = _name; 
        this.login = _login; 
        this.password = _password; 
        this.role = _role; 
        User.count++ 
    } 

    set Role(role:string){ 
        console.log(role) 
    } 
 
    static show_info(superuser: SuperUser) { 
        console.log(superuser.name, superuser.login, superuser.role) 
    } 
}
