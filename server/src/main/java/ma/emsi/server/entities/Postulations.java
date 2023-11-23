package ma.emsi.server.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

/**
 * @author BarkouchMourad
 **/
@Data
@AllArgsConstructor
@Entity
public class Postulations {
    @Id
    private String id;
    private String cvPath;
    @OneToOne
    private Membres postulePar;
    public Postulations() {
        this.id = UUID.randomUUID().toString();
    }

}
