using System;
class SecondsSum
{
    static void Main()
    {
        int secondsA = int.Parse(Console.ReadLine());
        int secondsB = int.Parse(Console.ReadLine());
        int secondsC = int.Parse(Console.ReadLine());
        int minutes = (secondsA + secondsB + secondsC) / 60;
        int seconds = (secondsA + secondsB + secondsC) % 60;
        Console.WriteLine("{0}:{1:00}", minutes, seconds);
    }
}