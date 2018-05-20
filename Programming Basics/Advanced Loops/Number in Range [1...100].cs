using System;

public class Program
{
    public static void Main()
    {
        Console.Write("Enter a number in the range [1...100]: ");
        int n = int.Parse(Console.ReadLine());
        for (int nn=0; nn < 1; nn++) if (n < 1 || n > 100)
        {
            nn=-1;
            Console.WriteLine("Invalid number!");
            Console.Write("Enter a number in the range [1...100]: ");
            n = int.Parse(Console.ReadLine());
        }
        else
        {
            Console.WriteLine("The number is: {0}",n);
        }
    }
}
