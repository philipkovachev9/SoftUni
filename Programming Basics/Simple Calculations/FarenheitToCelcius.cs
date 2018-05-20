using System;

public class Program
{
	public static void Main()
	{
		var F = double.Parse(Console.ReadLine());
		var C = (F * 9/5) + 32;
		Console.WriteLine(C);
	}
}