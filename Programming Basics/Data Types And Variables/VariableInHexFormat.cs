using System;


public class Program
{
	public static void Main()
	{
		string hex = Console.ReadLine();
            int number = Convert.ToInt32(hex, 16);
            Console.WriteLine(number);


	}
}