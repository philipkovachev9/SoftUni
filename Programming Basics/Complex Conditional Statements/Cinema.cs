using System;

public class Program
{
	public static void Main()
	{
		var input = Console.ReadLine();
		double row = double.Parse(Console.ReadLine());
		double column = double.Parse(Console.ReadLine());
		if (input == "Premiere")
		{
			double sum = row * column * 12;
			Console.WriteLine("{0:f2}", sum);
		}
		else if (input == "Normal")
		{
			double sum = row * column * 7.50;
			Console.WriteLine("{0:f2}", sum);
		}
		else if (input == "Discount")
		{
			double sum = row * column * 5.00;
			Console.WriteLine("{0:f2}", sum);
		}
	}
}