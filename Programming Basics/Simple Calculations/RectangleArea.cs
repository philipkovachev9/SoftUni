using System;

public class Program
{
	public static void Main()
	{
		var a = double.Parse(Console.ReadLine());
		var h = double.Parse(Console.ReadLine());
		var area = a * h / 2;
		Console.WriteLine("Triangle area=" + area);
	}
}