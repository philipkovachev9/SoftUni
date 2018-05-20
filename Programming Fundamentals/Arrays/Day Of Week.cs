using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication4
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] days = { "Monday", "Tuesday", "Wednesday", "Tuesday", "Friday", "Saturday", "Sunday", };
            int day = int.Parse(Console.ReadLine());

            if (day <=0 || day >7) {
                Console.WriteLine("Invalid Day!");
            }
            else
            {
                Console.WriteLine(days[day - 1]);
            }
        }
    }
}
