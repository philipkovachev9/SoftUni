using System;

public class Program
{
	public static void Main()
	{
		int n = int.Parse(Console.ReadLine());
		int sum = 0;

		for (int i = 0; i < n; i++)
		{
			int currentnum = int.Parse(Console.ReadLine());
			sum += currentnum;

		}
		Console.WriteLine(sum);
	}
}