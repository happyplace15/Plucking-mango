class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.stone = Constraint.create(options);
        World.add(world, this.stone);
    }
        fly(){
         this.sling.bodyA=null
        }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB.position;
        stoneObj.attach(launcherObject.body);
        strokeWeight(4);
       // line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly(){
        this.launcher.bodyA= null
    }
}