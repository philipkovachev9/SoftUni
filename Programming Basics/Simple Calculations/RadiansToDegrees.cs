using System;

public class Program
{
	public static void Main()
	{
		var rad = double.Parse(Console.ReadLine());
		var degrees = rad * 180 / Math.PI ;
		Console.WriteLine(degrees);
	}
}

