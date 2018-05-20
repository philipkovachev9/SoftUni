using System;

public class Program
{
	public static void Main()
	{
		string animal = Console.ReadLine();
		if (animal == "dog")
		{
			Console.WriteLine("mammal");
		}
		else if (animal == "tortoise" || animal == "crocodile" || animal == "snake")
		{
			Console.WriteLine("reptile");
		}
		else if (animal != "dog" || animal != "tortoise" || animal != "crocodile" || animal != "snake")
		{
			Console.WriteLine("unknown");
		}
	}
}