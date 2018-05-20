using System;

public class Program
{
	public static void Main()
	{
        var x1 = decimal.Parse(Console.ReadLine());
            var y1 = decimal.Parse(Console.ReadLine());
            var x2 = decimal.Parse(Console.ReadLine());
            var y2 = decimal.Parse(Console.ReadLine());
            var width = Math.Abs(x2 - x1);
            var height = Math.Abs(y2 - y1);
            Console.WriteLine("Area: {0}", width * height);
            Console.WriteLine("Perimeter: {0}", 2 * (width + height));
	}
}