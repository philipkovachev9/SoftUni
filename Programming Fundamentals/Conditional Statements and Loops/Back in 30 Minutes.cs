using System;

public class Program
{
	public static void Main()
	{
		int hours = int.Parse(Console.ReadLine());
		int minutes = int.Parse(Console.ReadLine());

		minutes  += 30;

		if (minutes > 59) {
		minutes -=60;
			hours++;
		}

		if (hours > 23 ) {
		hours -= 24;
		}
		Console.WriteLine($"{hours}:{minutes:d2}");
	}

}