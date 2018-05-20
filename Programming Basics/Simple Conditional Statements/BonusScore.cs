using System;

class Program
{
    static void Main()
    {

        double num = int.Parse(Console.ReadLine());
        double bonus = 0.0;

        if (num <= 100)
        {
            bonus += 5;
        }
        else if (num >= 101 && num <= 1000)
        {
            bonus = (20 * num) / 100;
        }
        else if (num > 1000)
        {
            bonus = (10 * num) / 100;
        }
        //next check
        if (num % 2 == 0)
        {
            bonus = bonus + 1;
        }
        else if (num % 10 == 5)
        {
            bonus = bonus + 2;
        }

        double allBonus = bonus;
        double allPoints = num + bonus;
        Console.WriteLine(allBonus);
        Console.WriteLine(allPoints);
    }
}