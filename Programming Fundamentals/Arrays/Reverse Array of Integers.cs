using System;
using System.Linq;

public class Program
{
    public static void Main()
    {
        int n = int.Parse(Console.ReadLine());
		int[] array = new int[n];

		for (int i = 0; i < n; i++) {
		    array[i] = int.Parse(Console.ReadLine());

		}

		for (int i = n -1; i >= 0; i--) {
			 Console.WriteLine(array[i]);
			}

    }
}