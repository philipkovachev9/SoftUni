using System;

public class Program
{
	public static void Main()
	{
		var usd = double.Parse(Console.ReadLine());
		var bgn = usd * 1.79549;
		Console.WriteLine(bgn);
	}
}