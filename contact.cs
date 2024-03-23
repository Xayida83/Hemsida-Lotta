using System.Net;
using System.Net.Mail;
using Microsoft.AspNetCore.Mvc;

public class ContactController : Controller
{
    [HttpPost]
    public IActionResult SendEmail(string name, string email, string message)
    {
        var fromAddress = new MailAddress("dinadress@example.com", "Från Namn");
        var toAddress = new MailAddress("mottagarensadress@example.com", "Till Namn");
        const string fromPassword = "dinlösenord";
        const string subject = "Ämne";
        string body = $"Från: {name}\nE-post: {email}\nMeddelande: {message}";

        var smtp = new SmtpClient
        {
            Host = "smtp.example.com",
            Port = 587,
            EnableSsl = true,
            DeliveryMethod = SmtpDeliveryMethod.Network,
            UseDefaultCredentials = false,
            Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
        };
        using (var mailMessage = new MailMessage(fromAddress, toAddress)
        {
            Subject = subject,
            Body = body
        })
        {
            smtp.Send(mailMessage);
        }

        return View();
    }
}
