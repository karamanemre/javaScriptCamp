export class BaseLogger{
    log(data){
        console.log("Default Logger"+data)
    }

}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Log To elastic"+data)
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Log To mongo"+data)
    }
}