using System;

class PasswordGuess
{

    static void Main()
    {
        var x = (Console.ReadLine());

        if (x == "s3cr3t!P@ssw0rd")
        {
            Console.WriteLine("Welcome");
        }
        else if (x != "s3cr3t!P@ssw0rd")
        {
            Console.WriteLine("Wrong password!");
        }

    }
}