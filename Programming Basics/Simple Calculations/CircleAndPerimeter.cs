using System;

public class Program
{
	public static void Main()
	{
		var r = double.Parse(Console.ReadLine());
		var area = Math.PI * r * r;
		var perimeter = 2 * Math.PI * r;
		Console.WriteLine("Area =" + area + " Perineter=" + perimeter);
	}
}