using System;

public class Program
{
	public static void Main()
	{
		int n = int.Parse(Console.ReadLine());
		string myString = (new string ('*', n));
		for (int i = 0; i < n; i++)
		{
			Console.WriteLine(myString);
		}
	}
}