class trashbin
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true,
			
			
			
			}
		this.width=width;
		this.height=height;
	
		this.body=Bodies.rectangle(x,y,width,height, options)
		World.add(world, this.body);
this.image=loadImage("dustbingreen.png")
	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			image(this.image,0,0,this.width, this.height);
			pop()
			
	}

}
