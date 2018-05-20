using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        string s = new string('s', n).Replace("s","* ");

        for (int i = 0; i < n; i++)
            Console.WriteLine($"{new string(' ', n-i-1)}{s.Substring(0, 2 * i + 1)}");

        for (int i = n-2; i>=0; i--)
            Console.WriteLine($"{new string(' ', n - i - 1)}{s.Substring(0, 2 * i + 1)}");
    }
}