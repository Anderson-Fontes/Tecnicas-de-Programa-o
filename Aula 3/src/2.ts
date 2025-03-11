class X{
    um(){
    {console.log("um")};}
}

class Y extends X{
    dois()
    {super.um()
        console.log("dois");}
}


class Z extends Y{

    tres()
    {super.dois()
        console.log("tres") };

}

const z = new Z();
z.tres();