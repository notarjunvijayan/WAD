var arr=new Array();
document.writeln("<h1>Grade of Students </h1>");
var len=Number(prompt("Enter the Number of Students :"));
document.write("<br><h3>Size : " + len+"</h3>");
var avg=0;

function arraySum(arr,start,len)
{   
    var sum=0;
    for(x=start;x<len;x++)
        {
        sum+=arr[x];
        }
    return sum;
}

for(i=0;i<len;i++)
{
    arr[i]=new Array();

    arr[i][0]=prompt("Enter the Name of Student "+ (i+1) );

    for (j=1;j<4;j++)
        {
        arr[i][j]=Number(prompt("Enter Mark of Subject "+j));
        }
    
    arr[i].push(arraySum(arr[i],1,4)/3);
}

for(i=0;i<len;i++)
{   avg+=arr[i][4];

    document.write("<br>"+arr[i][0]+" : ")
    for (j=1;j<5;j++)
    {
        document.write(arr[i][j]+" ");
    }
    
}

avg=avg/len;


document.write("<br><b>Class Average Grade : "+avg+"</b>")