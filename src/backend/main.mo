import Time "mo:core/Time";
import Array "mo:core/Array";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  type Submission = {
    timestamp : Int;
    name : Text;
    email : Text;
    message : Text;
  };

  let submissions = List.empty<Submission>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    if (name == "" or email == "" or message == "") {
      Runtime.trap("All fields are required. ");
    };

    let submission : Submission = {
      timestamp = Time.now();
      name;
      email;
      message;
    };

    submissions.add(submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.toArray();
  };
};
