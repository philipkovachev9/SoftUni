using System;

public class Program
{
	public static void Main()
	{
		string country = Console.ReadLine();

       switch (country) {
           case "England":
           Console.WriteLine("English");
		   break;
		   case "USA":
           Console.WriteLine("English");
		   break;
		   case "Spain":
           Console.WriteLine("Spanish");
		   break;
		   case "Argentina":
           Console.WriteLine("Spanish");
		   break;
		   case "Mexico":
           Console.WriteLine("Spanish");
		   break;
		   default :
		   Console.WriteLine("unknown");
		   break;
       }
	}
}