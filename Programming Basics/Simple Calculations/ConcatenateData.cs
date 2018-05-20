using System;

public class Program
{
	public static void Main()
	{
		var firstName = Console.ReadLine();
		var lastName = Console.ReadLine();
		var age = int.Parse(Console.ReadLine());
		var town = Console.ReadLine();

		Console.Write("You are" + " " + firstName + " " + lastName + "," + " " + "a" + " " + age + "-years old person from" + " " + town + "."  );


	}
}